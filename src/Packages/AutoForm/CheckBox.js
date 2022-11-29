import React from 'react'
import { Checkbox } from 'antd';


function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }


export default function CheckBox() {
    return (
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
    )
}
