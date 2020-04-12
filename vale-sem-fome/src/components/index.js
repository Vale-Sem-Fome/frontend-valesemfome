export { default as App } from './App'
export { default as Input } from './Input'
export { default as Header } from './FormRecipients/Header'
export { default as FakeGroupButton } from './FormRecipients/FakeGroupButton'
export { default as Footer } from './FormRecipients/Footer'
export { default as InputMask } from './InputMask'
export { default as Images} from './Images'
export { default as HeaderVolunteer } from './FormVolunteers/Header'

/**
 * Generics Questions
 */

export { default as FullName } from './Questions/GeneralQuestions/FullName'
export { default as Document } from './Questions/GeneralQuestions/Document'
export { default as Email } from './Questions/GeneralQuestions/Email'
export { default as BirthDay } from './Questions/GeneralQuestions/BirthDay'
export { default as PhoneNumber } from './Questions/GeneralQuestions/PhoneNumber'
export { default as HomeAddress } from './Questions/GeneralQuestions/HomeAddress'
export { default as AcceptanceTerm } from './Questions/GeneralQuestions/AcceptanceTerm'


/**
 * Specific Questions: Recipients
 */

export { default as ResidentsQuantity} from './Questions/SpecificQuestions/Recipients/GeneralsQuestions/ResidentsQuantity'
export { default as RegionCity } from './Questions/SpecificQuestions/Recipients/SJC/RegionCity'
export { default as CurrentFinancialStatus } from './Questions/SpecificQuestions/Recipients/GeneralsQuestions/CurrentFinancialsStatus'
export { default as PreviousRegister } from './Questions/SpecificQuestions/Recipients/GeneralsQuestions/PreviousRegister'

/**
 * Specific Questions: Volunteers
 */

export { default as AvaiableDays } from './Questions/SpecificQuestions/Volunteers/AvaiableDays'
export { default as AvaiableHours } from './Questions/SpecificQuestions/Volunteers/AvaiableHours'
export { default as PreviousVolunteersRegister } from './Questions/SpecificQuestions/Volunteers/PreviousVolunteersRegister'
export { default as WorkFront } from './Questions/SpecificQuestions/Volunteers/WorkFront'