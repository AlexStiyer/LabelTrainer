import React from "react";

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import WysInput from "./WysInput";

describe("WysInput tests", () => {

	let value: string;
	beforeEach(()=>{
		value = "test";
		render(
			<WysInput
				displayValue={value}
				commitChange={(newValue)=> {value = newValue;}}
			/>
		);
	});

	it("Commits value when submited", () => {
		const inputComponent = screen.getByTestId("wysinput");
		
		fireEvent.focus(inputComponent);
		fireEvent.change(inputComponent, {target : {value: "this is a new test"}});
		expect(value).toBe("test");
		
		fireEvent.submit(screen.getByTestId("wysform"));
		fireEvent.blur(inputComponent);
		expect(value).toBe("this is a new test");
	});

	it("Saves value when focus is lost", () => {
		const inputComponent = screen.getByTestId("wysinput");
		
		fireEvent.focus(inputComponent);
		fireEvent.change(inputComponent, {target : {value: "this is a new test"}});
		expect(value).toBe("test");
		
		fireEvent.blur(inputComponent);
		fireEvent.submit(screen.getByTestId("wysform"));
		expect(value).toBe("this is a new test");
	});

	it("Limits input length when inputMaxLength prop is set", () => {
		cleanup();
		render(
			<WysInput
				displayValue={value}
				commitChange={(newValue)=> {value = newValue;}}
				inputMaxLength={5}
			/>
		);

		const inputComponent = screen.getByTestId("wysinput");
		fireEvent.change(inputComponent, {target : {value: "abcdefghi"}});
		fireEvent.submit(screen.getByTestId("wysform"));
		expect(value).toBe("abcde");
	});

});