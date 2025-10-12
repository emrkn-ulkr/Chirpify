import React from 'react'
 import { Switch } from 'antd';
function header() {

const onChange = checked => {
  console.log(`switch to ${checked}`);
};
    return (
        <div className='text-9xl'>
<div>
<Switch defaultChecked onChange={onChange}className="absolute left-250 bottom-10"  />
<span> Dark Mode  | TÜRKÇE'YE GEÇ</span>
</div>
        <div class="background-shapes-header"></div>
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
  

        </div>
    )
}

export default header
