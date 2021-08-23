import React, { Component } from "react";
import add from "./components/img/add.svg";
import car from "./components/img/car.svg";
import remove from "./components/img/remove.svg";
import styled from "styled-components";


const Container = styled.section`
  width: 100%;
  height: auto;
  background-color: #a66273;
`;
const BoxTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  color: #fff;
`;

const WrapContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Container1 = styled.section`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0px;
`;

const BoxCars = styled.div`
  width: 20vw;
  height: auto;
  display: flex;
  flex-direction: column;
  border: solid #fff;
  margin: 1rem 0px 0px 1rem;
  border-radius: 10px;
`;

const TitleCar = styled.h2`
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding-left: 0.5rem;
  font-size: 1.75rem;
`;

const ButtonAdd = styled.button`
  background-color: transparent;
  border: none;
`;

const Description = styled.div`
  background-color: #e2b4ae;
  height: 90%;
`;

const ItemDescription = styled.p`
  padding-left: 1rem;
  font-size: 1rem;
  font-weight: 600;
`;

const Container2 = styled.section`
  width: 25%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${car});
  background-repeat: no-repeat;
  border: solid #ffffff;
  border-radius: 10px;
  background-color: #e2b4ae;
  margin: 1rem 3rem 0px 0px;
`;

const WrapMinicart = styled.div`
  width: 24vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #563449;
  border: 2px solid #fff;
  color: #fff;
`;

const Minicart = styled.div`
  width: 21vw;
  height: 24vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #563449;
  color: "#fff";
  padding-left: 2rem;
`;

const Total = styled.section`
  width: 40%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: #563449;
`;

const TitleTotal = styled.h2`
  color: #fff;
  font-size: 2rem;
  text-align: center;
`;

const Result = styled.p`
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
`;

const TitleBrand = styled.h2`
  width: 90%;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  padding-left: 0.5rem;
`;

const ButtonRemove = styled.button`
  background-color: transparent;
  border: none;
`;

const Item = styled.p`
  color: #fff;
  font-size: 1rem;
`;

class App extends Component {
  state = {
    listCars: [
      {
        id: 1,
        marca: "Jetta",
        montadora: "Volkswagem",
        preco: 144000,
        tipo: "Sedan"
      },

      {
        id: 2,
        marca: "Polo",
        montadora: "Volkswagem",
        preco: 70000,
        tipo: "Hatch"
      },

      {
        id: 3,
        marca: "T-Cross",
        montadora: "Volkswagem",
        preco: 123000,
        tipo: "SUV"
      },

      {
        id: 4,
        marca: "Tiguan R-line",
        montadora: "Volkswagem",
        preco: 146000,
        tipo: "SUV"
      },

      {
        id: 5,
        marca: "Civic",
        montadora: "Honda",
        preco: 115000,
        tipo: "Sedan"
      },

      {
        id: 6,
        marca: "Corolla",
        montadora: "Toyota",
        preco: 110000,
        tipo: "Sedan"
      },

      {
        id: 7,
        marca: "Corolla Cross",
        montadora: "Toyota",
        preco: 184000,
        tipo: "SUV"
      },
      {
        id: 8,
        marca: "Compass",
        montadora: "Jeep",
        preco: 132000,
        tipo: "SUV"
      },

      {
        id: 9,
        marca: "Golf GTI",
        montadora: "Volkswagem",
        preco: 138000,
        tipo: "Hatch"
      }
    ],
    shoppingCars: [],
    total: ""
  };

  addCars = (item) => {
    this.setState(
      {
        shoppingCars: this.state.shoppingCars.concat(item)
      },
      () =>
        this.setState({
          total: this.state.total.concat(this.state.shoppingCars)
        })
    );

    console.log(this.state.shoppingCars);
  };

  removeCars = (id) => {
    this.setState({
      shoppingCars: this.state.shoppingCars.filter((carro) => carro.id !== id)
    });
  };

  render() {
    return (
      <Container>
        <BoxTitle>
          <Title>Shopping Cars</Title>
        </BoxTitle>
        <WrapContainer>
          <Container1>
            {this.state.listCars.map((item, index) => (
              <div key={index}>
                <BoxCars>
                  <TitleCar>
                    {" "}
                    {item.marca}
                    <ButtonAdd onClick={() => this.addCars(item)}>
                      <img src={add} alt="Add" />
                    </ButtonAdd>
                  </TitleCar>

                  <Description>
                    <ItemDescription>
                      Montadora: {item.montadora}{" "}
                    </ItemDescription>
                    <ItemDescription> Tipo: {item.tipo} </ItemDescription>
                    <ItemDescription>
                      {" "}
                      Preço:{" "}
                      {item.preco.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        currencyDisplay: "symbol"
                      })}
                    </ItemDescription>
                  </Description>
                </BoxCars>
              </div>
            ))}
          </Container1>

          <Container2>
            {this.state.shoppingCars.map((item) => (
              <WrapMinicart>
                <Minicart>
                  <TitleBrand>
                    {" "}
                    {item.marca}
                    <ButtonRemove onClick={() => this.removeCars(item.id)}>
                      <img src={remove} alt="Remove" />
                    </ButtonRemove>
                  </TitleBrand>

                  <Item> Tipo: {item.tipo} </Item>
                  <Item>
                    {" "}
                    Preço:{" "}
                    {item.preco.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                      currencyDisplay: "symbol"
                    })}{" "}
                  </Item>
                </Minicart>
              </WrapMinicart>
            ))}

            <Total>
              <TitleTotal> Total</TitleTotal>
              <Result>
                {" "}
                {this.state.shoppingCars
                  .reduce((a, c) => a + c.preco, 0)
                  .toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    currencyDisplay: "symbol"
                  })}{" "}
              </Result>
            </Total>
          </Container2>
        </WrapContainer>
      </Container>
    );
  }
}
export default App;
