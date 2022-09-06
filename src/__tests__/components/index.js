import React from "react";
import { render } from "@testing-library/react";
import AppLayout from "../../components/AppLayout";
import { BrowserRouter } from "react-router-dom";
import Character from "../../components/Character";
import userEvent from "@testing-library/user-event";
import CharacterContainer from "../../components/CharacterContainer";

const makeCharacter = (
  char_id,
  name,  
) => ({
  char_id,
  name,
});

describe("AppLayoutComponent", () => {
  it("Displays Header component", () => {
    // Prepare
    const appLayout = render(
      <BrowserRouter>
        <AppLayout/>
      </BrowserRouter>
    );
    // Assert
    expect(appLayout
      .getByText("Home")
      .closest("a")
    ).toHaveAttribute("href", "/");
  });

  it("Displays children", () => {
    // Prepare
    const TEST_TEXT = "Test Child Component";
    const appLayout = render(
      <BrowserRouter>
        <AppLayout>
          <div>{TEST_TEXT}</div>
        </AppLayout>
      </BrowserRouter>
    );
    // Assert
    expect(appLayout.queryByText(TEST_TEXT)).toBeInTheDocument();
  });
});

describe("CharacterComponent", () => {
  it("Shows character's name", () => {
    // Prepare
    const CHARACTER_NAME = "Mike Hammil";
    const character = render(<Character name={CHARACTER_NAME} />);
    // Assert
    expect(character.queryByText(CHARACTER_NAME)).toBeInTheDocument();
  });

  it("Is disabled button if no ID prop is passed", () => {
    // Prepare
    const character = render(<Character />);
    // Assert
    expect(character.queryByRole("button")).toHaveAttribute("disabled");
  });

  it("Is enabled button if ID prop is passed", () => {
    // Prepare
    const character = render(<Character id={3} />);
    // Assert
    expect(character.queryByRole("button")).not.toHaveAttribute("disabled");
  });

  it("Is enabled button if ID prop equals Zero", () => {
    // Prepare
    const character = render(<Character id={0} />);
    // Assert
    expect(character.queryByRole("button")).not.toHaveAttribute("disabled");
  });

  it("Calls a handlerFunction on user click action", () => {
    // Prepare
    const TEST_FN = jest.fn();
    const character = render(
      <Character id={3} onClick={TEST_FN} />
    );
    userEvent.click(character.queryByRole("button"));
    // Assert
    expect(TEST_FN.mock.calls.length).toEqual(1);
  });
});

describe("CharacterContainerComponent", () => {
  it("Renders passed object characters", () => {
    // Prepare
    const characters = [
      makeCharacter(0, "Mark"),
      makeCharacter(2, "Nelson"),
    ];
    const charactersContainer = render(
      <CharacterContainer characters={characters} />,
    );
    // Assert
    expect(charactersContainer.queryByText("Mark")).toBeInTheDocument();
    expect(charactersContainer.queryByText("Nelson")).toBeInTheDocument();
  });

  it("Renders passed object and string characters", () => {
    // Prepare
    const characters = [
      makeCharacter(0, "Mark"),
      makeCharacter(null, "Niko"),
      "George",
    ];
    const charactersContainer = render(
      <CharacterContainer characters={characters} />,
    );
    // Assert
    expect(charactersContainer.queryByText("Mark")).toBeInTheDocument();
    expect(charactersContainer.queryByText("Niko")).toBeInTheDocument();
    expect(charactersContainer.queryByText("George")).toBeInTheDocument();
  });
});
