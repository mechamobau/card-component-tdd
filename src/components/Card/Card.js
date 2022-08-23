import {
  Card as MantineCard,
  Button,
  Title,
  Divider,
  Box,
  Grid,
} from "@mantine/core";

function Card({ title, children, onClick }) {
  return (
    <MantineCard shadow="sm" p="lg" radius="md" withBorder>
      <Title order={3}>{title}</Title>

      <Divider my={8} />

      <Box
        sx={(theme) => ({
          backgroundColor: "#E8E9EA",
          padding: theme.spacing.md,
          borderRadius: theme.radius.md,
          color: "#71767D",
        })}
      >
        {children}
      </Box>

      <Grid>
        <Grid.Col span={4} offset={8}>
          <Button
            onClick={onClick}
            variant="light"
            fullWidth
            color="green"
            size="md"
            mt="md"
            radius="md"
          >
            Confirmar
          </Button>
        </Grid.Col>
      </Grid>
    </MantineCard>
  );
}

export default Card;
