import React from "react"
import testRender from "react-test-renderer"
import Hero from "../src/components/Hero"
import { render, fireEvent } from "@testing-library/react"

describe("Hero Component", () => {
  it("should be start with no loader", () => {
    const component = testRender.create(<Hero isFetching={false} />);
    const testInstance = component.root;
    expect(testInstance.findByType(Hero).props.isFetching).toBe(false);
  })

  it("should start loader on button click", () => {
    const component = testRender.create(<Hero isFetching={true} />);
    const { getByTestId } = render(<Hero />)
    const testInstance = component.root;

    fireEvent.click(getByTestId('button'))

    expect(testInstance.findByType(Hero).props.isFetching).toBe(true)

  })

  it("input value shoud maintain the value", () => {
    const { getByTestId, getByLabelText } = render(<Hero />)

    fireEvent.change(getByTestId('input'), { target : { value : 'Monuments'}})
    fireEvent.click(getByTestId('button'))

    expect(getByTestId('input').value).toBe('Monuments')

  })

})