import {render} from "@testing-library/react";
import NotFoundError from "./notFoundError"
describe("NotFoundError component" , ()=>{
    it ("display the exact text from props" , ()=>{
        const {getByTestId} = render(<NotFoundError error = {"Data Not Found"}/>)  
        const card = getByTestId("card");
        expect(card.firstElementChild?.innerHTML).toBe("Data Not Found");
    })
})
