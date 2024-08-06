import React from 'react';
import './input.css';

interface TextInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: { position: 'before' | 'after', text: string };
}
export function TextInput({ label, ...inputProps }: TextInputProps) {
  return (<>
    {label?.position == 'before' && <label>{label.text}</label>}
    <input {...inputProps} />
    {label?.position == 'after' && <label>{label.text}</label>}
  </>)
}

interface SelectInputProps {
  options: ({ name: string } & React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>)[]
}
export function SelectInput({ options }: SelectInputProps) {
  return (<select>
    {options.map(opt => <option key={opt.value?.toString() ?? opt.name} value={opt.value}>{opt.name ?? opt.value}</option>)}
  </select>)
}

interface RadioInputProps {
  options: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>[]
  onChange: (value: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => void
}
export function RadioInput({ options, onChange }: RadioInputProps) {

  function handleChange(option: typeof options[0]) {
    options.forEach(opt => {
      opt.checked = opt === option
    })
    onChange(option)
  }

  return options.map(opt => (<React.Fragment key={opt.name}>
    <input type='radio' name={opt.name} value={opt.value} checked={opt.checked} onChange={() => handleChange(opt)} />
    <label htmlFor={opt.name}>{opt.name}</label>
  </React.Fragment>))
}