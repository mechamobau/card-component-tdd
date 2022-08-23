import { Text } from "@mantine/core";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";

describe("Card | component | integration test", () => {
  it("should display the title when the title prop is passed", () => {
    render(
      <Card title="Card title">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </Text>
      </Card>
    );

    expect(
      screen.getByRole("heading", { name: "Card title" })
    ).toBeInTheDocument();
  });

  test("if children element is showed when the children is passed", () => {
    const { rerender } = render(
      <Card title="Card title">
        <Text>Lorem ipsum dolor sit amet</Text>
      </Card>
    );

    expect(screen.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument();

    rerender(
      <Card title="Card title">
        <Text>Texto atualizado</Text>
      </Card>
    );

    expect(screen.getByText("Texto atualizado")).toBeInTheDocument();
  });

  it("should call 'onClick' when the show button is clicked", () => {
    const onClickMock = jest.fn();

    render(
      <Card title="Card title" onClick={onClickMock}>
        <Text>Lorem ipsum dolor sit amet</Text>
      </Card>
    );

    userEvent.click(screen.getByRole("button", { name: "Confirmar" }));

    expect(onClickMock).toHaveBeenCalled();
  });
});
