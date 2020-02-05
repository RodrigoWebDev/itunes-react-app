import React from "react"
import Card from "../src/components/Card"
import { render, fireEvent } from "@testing-library/react"

describe("Card Component", () => {
  it("Card should contain a img", () => {
    
    const { getByTestId } = render(<Card info=""/>)

    expect(getByTestId("card"))

  })

  it("Card info should start as undefined", () => {
    const { getByTestId } = render(<Card info={[]}/>)

    expect(getByTestId("card").info).toBe(undefined)
  })

  it("Card should contain artistName, trackName, dateString, primaryGenreName and infoTrackPrice", () => {
    const { getByTestId } = render(<Card info={["item1", "item2"]}/>)

    expect(getByTestId("card").info)
  })

})