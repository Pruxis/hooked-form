export interface Values {
  [fieldId: string]: any
}

export interface Touched {
  [fieldId: string]: boolean
}

export interface Errors {
  [fieldId: string]: string
}

export interface InitialValues {
  [fieldId: string]: any
}

export interface FormHookContext {
  errors: Errors
  initialValues: InitialValues
  setFieldValue: (fieldId: string, value: any) => void
  setFieldTouched: (fieldId: string, value: any) => void
  touched: Touched
  values: Values
}
