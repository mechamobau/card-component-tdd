import { Container, MantineProvider, Text } from "@mantine/core";
import Card from "./components/Card/Card";

function App() {
  return (
    <MantineProvider>
      <Container>
        <Card title="Card title" onClick={console.log}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </Text>
        </Card>
      </Container>
    </MantineProvider>
  );
}

export default App;
