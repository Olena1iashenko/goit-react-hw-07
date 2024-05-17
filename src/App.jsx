import "./App.css";
import { ContactList } from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContactsThunk } from "./redux/contactsOps";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
