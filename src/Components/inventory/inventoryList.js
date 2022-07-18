import {
  Container,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Menu
} from "@material-ui/core";

let products = [{ id: 1, nome: "bolo", quantidade: 20 }];

const InventoryBody = () => {
  return (
    <Container>
      <p>Selecione o estoque que deseja visualizar:</p>
      {/* GET todos os estoques*/}
      <Menu></Menu>
      {/*options.map((x) => {
        const {id, nome} = x
        return (
          <MenuItem key={nome} onClick={handleClose}>
            {nome}
          </MenuItem>)
      }) */}

      {/* GET PRODUTOS */}
      {products.map((x) => {
        const { id, nome, quantidade } = x;
        return (
          <Card variant="outlined">
            <div key={id}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {nome},{quantidade}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </div>
          </Card>
        );
      })}
    </Container>
  );
};

export default InventoryBody;
