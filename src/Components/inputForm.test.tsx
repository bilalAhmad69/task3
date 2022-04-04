import {render , fireEvent} from "@testing-library/react";
import { BrowserRouter , Route, Routes , MemoryRouter} from "react-router-dom";
import {InputForm} from "./inputForm";
// is Component Render
describe("InputForm component" , ()=>{
    it ("button and text Field Should be Rendered" , ()=>{
        const {getByTestId} = render(
        <MemoryRouter>
         <InputForm/>
         </MemoryRouter> 
       
        )
        const inputTxt = getByTestId("inputTxt") as HTMLInputElement;
        const btn = getByTestId("btn");
        expect(inputTxt).toBeTruthy();
        expect(btn).toBeTruthy();
        fireEvent.change(inputTxt, {
            target: { value: "testing" }
          });
        expect(inputTxt.value).toBe("testing")
    })
  it ("check the value Of TextField on OnChange" , ()=>{
    const {getByTestId} = render(
        <MemoryRouter>
         <InputForm/>
         </MemoryRouter> 
       
        )
        const inputTxt = getByTestId("inputTxt") as HTMLInputElement;
    fireEvent.change(inputTxt, {
                target: { value: "testing" }
              });;
               expect(inputTxt.value).toBe("testing")
  })
  
// test Case for onClick to change url
})
