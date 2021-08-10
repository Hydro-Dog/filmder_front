import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { combineLatest, forkJoin, of, Subject } from 'rxjs';
import { takeUntil, skip, switchMap, catchError, tap } from 'rxjs/operators';
import { AuthFacade } from '../auth/state/auth.facade';
import { AuthService } from '../auth/state/auth.service';
import { UserQuery } from '../data-layers/user/user.query';
import { AsyncValidatorsService } from '../helpers/async-validators.service';
import { ToastComponentShared } from '../shared/components/toast-component/toast.component';
import { ApiError } from '../shared/models/api-error';

enum ViewMode {
  View,
  Edit,
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tab3Page implements OnInit, OnDestroy {
  @ViewChild(ToastComponentShared) toastComponentShared: ToastComponentShared;
  viewMode = ViewMode.View;
  viewModes = ViewMode;
  toastErrorMessage: string;

  profileSettingsForm = new FormGroup({
    userName: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur',
    }),
    firstName: new FormControl('', {
      validators: Validators.required,
    }),
    lastName: new FormControl('', {
      validators: [Validators.required],
    }),
    phone: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur',
    }),
  });

  userNameControl = this.profileSettingsForm.get('userName');
  firstNameControl = this.profileSettingsForm.get('firstName');
  lastNameControl = this.profileSettingsForm.get('lastName');
  phoneControl = this.profileSettingsForm.get('phone');

  user$ = this.uerQuery.selectUser$;
  saveChanges$ = new Subject();
  destroy$ = new Subject();

  constructor(
    private uerQuery: UserQuery,
    private authFacade: AuthFacade,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.user$.pipe(takeUntil(this.destroy$)).subscribe((user) => {
      if (user) {
        const { userName, firstName, lastName, phoneNumber } = user;

        this.profileSettingsForm.patchValue(
          {
            userName,
            firstName,
            lastName,
            phone: phoneNumber,
          },
          { emitEvent: false, onlySelf: true }
        );
        this.cd.detectChanges();
      } else {
        console.warn('user is null');
      }
    });

    this.saveChanges$
      .pipe(
        switchMap(() => {
          return forkJoin([
            this.authFacade
              .checkUserNameIsTaken(this.userNameControl.value)
              .pipe(catchError((e) => of(e))),
            this.authFacade
              .checkPhoneNumberIsTaken(this.phoneControl.value)
              .pipe(catchError((e) => of(e))),
          ]).pipe(
            tap((err) => {
              const errorMessages = (err as ApiError[])
                .filter((x) => x.error)
                .map((x) => x.error.message);
              if (errorMessages.length) {
                this.toastComponentShared.displayToast(errorMessages[0]);
              }
            })
          );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  setViewMode(mode: ViewMode) {
    this.viewMode = mode;
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.profileSettingsForm.controls[controlName];
    const result = control.dirty && control.invalid;

    return Boolean(result);
  }

  getErrorMessage(controlName: string): string {
    if (this.profileSettingsForm.controls[controlName].hasError('required')) {
      return '(Field required)';
    }
  }

  saveChanges() {
    this.setViewMode(this.viewModes.View);
    this.saveChanges$.next();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
