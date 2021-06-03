import "./styles.css";
import React, {useState} from "react";
import Field from './components/field'
import Languages from './components/languages';
import Translate from './components/translate';

export default function App(){
  const [language, setLanguage] = useState('ar');
  const [text, setText] = useState('');

  return (
    <div>
      <Field label = "enter eng" onChange = {setText}/>
      <Languages language = {language} onLanguageChange = {setLanguage}/>
      <hr />
      <Translate text = {text} language = {language}/>
    </div>
  );
}
