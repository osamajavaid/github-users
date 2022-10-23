import React, { useRef } from 'react'

const Form = (props) => {
    const input = useRef('')
    const formHandler = (e) =>{
            e.preventDefault();
            const formInput = input.current.value;
            console.log(formInput);
            props.searchUser(formInput)
            
            // 👇️ clear all input values in the form
            e.target.reset();
            // return formInput;
        }
  return (
    <div>
        <form
            onSubmit={formHandler} 
            className="max-w-md px-4 mx-auto mt-12">
            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-900 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    ref={input}
                    type="text"
                    placeholder="Search"
                    className="w-full py-3 pl-12 pr-4 text-gray-900 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
            </div>
        </form>
    </div>
  )
}

export default Form
