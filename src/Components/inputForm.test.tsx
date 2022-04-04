import {render , fireEvent} from "@testing-library/react";
import { BrowserRouter , Route, Routes} from "react-router-dom";
import {InputForm} from "./inputForm";
// is Component Render
describe("InputForm component" , ()=>{
    it ("button and text Field Should be Rendered" , ()=>{
        const {getByTestId} = render(
        <BrowserRouter>
        <Routes>   
     <Route path="/" element={<InputForm/>}/>  
        </Routes>
       </BrowserRouter>
        )
        const inputTxt = getByTestId("inputTxt");
        const btn = getByTestId("btn");
        
        expect(inputTxt).toBeTruthy();
        expect(btn).toBeTruthy();
    })
})
// test for onChange 
describe("check the Value of Input field On Change" , ()=>{
    it("check The On change value" , ()=>{
       const {getByTestId} =   render(
            <BrowserRouter>
            <Routes>   
         <Route path="/" element={<InputForm/>}/>  
            </Routes>
           </BrowserRouter>
       );
       const inputTxt = getByTestId("inputTxt")as HTMLInputElement;
       fireEvent.change(inputTxt, {
        target: { value: "testing" }
      });;
       expect(inputTxt.value).toBe("testing")
    })
})


// test Case for onClick to change url