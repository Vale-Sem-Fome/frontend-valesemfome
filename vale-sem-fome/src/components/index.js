export { default as App } from './App'
export { default as Input } from './Generics/Forms/Input'
export { default as HeaderRecipients } from './Recipients/Header'
export { default as FakeGroupButton } from './Generics/Forms/FakeGroupButton'
export { default as Footer } from './Generics/Footer'
export { default as InputMask } from './Generics/Forms/InputMask'
export { default as Images} from './Generics/Images'
export { default as HeaderVolunteer } from './Volunteers/Header'

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


/**
 * View: Recipients Data
 */

 export { default as CityHeader } from './Generics/Headers/CityHeader'
 export { default as SearchForm} from './Generics/Forms/SearchForm'
 export { default as TableDesktop } from './Recipients/Tables/TableDesktop'
 export { default as TableMobile } from './Recipients/Tables/TableMobile'