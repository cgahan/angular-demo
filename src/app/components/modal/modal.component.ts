import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @ViewChild('dialog') _dialogEl!: ElementRef<HTMLDialogElement>;
  @ViewChild('form') _formEl!: ElementRef<HTMLFormElement>;

  @Output("accept") _submitEvent = new EventEmitter<Object | null>();

  _callback : Function | undefined = undefined;
  _form: any;

  show(callback?: Function) {
    this._callback = callback;
    this._dialogEl.nativeElement.showModal();
  }

  cancel() {
    this._dialogEl.nativeElement.close();
  }

  submit(event : any) : void {
    const form = this._formEl.nativeElement;
    if (form.matches(":invalid")) {
      event.preventDefault();
      return;
    }

    this._submitEvent.emit(
      [...new FormData(form).entries()].reduce(
        (prev, [k, v]) => ({ ...prev, [k]: v }),
        {}
      )
    );
    form.reset();
  }
}
