import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import NoData from "../../../components/common/NoData";
import Header from "../../../components/common/Header";
import CustomTextDisplay from "../../../components/common/CustomTextDisplay";
import AvatarDisplay from "../../../components/common/AvatarDisplay";

it("NoDataComponent shows text", () => {
  // Prepare
  render(<NoData />);
  // Assert
  expect(screen.queryByText("Sorry, no data available")).toBeInTheDocument();
});

it("CustomTextDisplayComponent shows valid text", () => {
  // Prepare
  render(
    <CustomTextDisplay
      title="Test title"
      value="Test value"
    />
  );
  // Assert
  expect(screen.queryByText("Test title")).toBeInTheDocument();
  expect(screen.queryByText("Test value")).toBeInTheDocument();
});

describe("HeaderComponent", () => {
  it("Shows valid Header", () => {
    // Prepare
    const header = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    // Assert
    expect(header).toMatchSnapshot();
  });

  it("Contains a Home link", () => {
    // Prepare
    const header = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    // Assert
    expect(header
      .getByText("Home")
      .closest("a")
    ).toHaveAttribute("href", "/");
  });
});

describe("AvatarDisplayComponent", () => {
  it("Shows alt text if no src is provided", () => {
    // Prepare
    render(<AvatarDisplay alt="No Data" />);
    // Assert
    expect(screen.queryByText("No Data")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("Shows img if valid imgSrc prop is provided", () => {
    // Prepare
    const validTestImgSrc = "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg";
    render(
      <AvatarDisplay
        imgSrc={validTestImgSrc}
        alt="No Data"
      />
    );
    // Assert
    expect(screen.queryByText("No Data")).not.toBeInTheDocument();
    expect(screen.queryByRole("img")).toBeInTheDocument();
  });
});
