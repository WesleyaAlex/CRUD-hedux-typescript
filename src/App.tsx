import { FC } from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Contact } from './store/interfaces/Contact'
import { ContactsForm } from './pages/Form'
import { ContactsList } from './pages/List'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { UseContactsLogic } from "./store/actions/UseContactsLogic"

const App: FC = () => {
  const { addContact, contact, contactList, removeContact } = UseContactsLogic()

  const handleFormSubmit = (contato: Contact) => {
    addContact(contato)
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-contacts" element={<ContactsForm contact={contact} submitForm={handleFormSubmit} />}>
            <Route path=":index" element={<ContactsForm contact={contact} submitForm={handleFormSubmit} />} />
          </Route>
          <Route path="/consult-contacts" element={<ContactsList list={contactList} onDelete={removeContact} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;