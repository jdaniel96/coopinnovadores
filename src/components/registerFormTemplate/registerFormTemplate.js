import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import coopLogo from "../../assets/coopinnovadores-long-green-logo.png";

export const RegisterFormTemplate = (props) => {
  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Note: Months are zero-based, so we add 1
  const year = currentDate.getFullYear();

  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "white",
    },
    body: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      alignItems: "center",
    },
    logo: {
      marginTop: "-20",
      width: 250,
      height: 120,
      marginBottom: 70,
    },
    header: {
      marginTop: "-80",
      fontSize: 10,
    },
    date: {
      alignSelf: "flex-end",
      marginRight: 25,
      fontSize: 11,
      marginTop: 15,
    },
    underlined: {
      textDecoration: "underline",
    },
  });

  return (
    <Document>
      <Page size={"A4"} style={styles.page}>
        <View style={styles.body}>
          <Image style={styles.logo} src={coopLogo} />
          <Text style={styles.header}>
            COOPERATIVA DE AHORRO, CRÉDITO Y SERVICIOS MULTIPLES DE INNOVADORES
            (COOPINNOVADORES)
          </Text>
          <Text style={styles.date}>
            Fecha <Text>{day}-</Text>
            <Text>{month}</Text>
            <Text>-{year}</Text>
          </Text>
          <View
            style={{
              alignSelf: "flex-start",
              marginLeft: 25,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>Socio No.</Text>
            <Text
              style={{
                fontSize: 11,
                textAlign: "center",
              }}
            >
              ______
            </Text>
          </View>
          <Text
            style={{
              alignSelf: "flex-start",
              fontSize: 12,
              marginLeft: 25,
              marginTop: 10,
              marginBottom: 20,
            }}
          >
            <Text>Datos del Socio/a: </Text>
          </Text>
          <View
            style={{
              justifyContent: "flex-start",
              alignSelf: "flex-start",
              marginLeft: 25,
              marginTop: 10,
              width: "90%",
              overflow: "hidden",
              fontSize: 9,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text>NOMBRE Y APPELLIDO:</Text>
              <Text
                style={{
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  flex: 1,
                  marginBottom: 15,
                  color: "blue",
                }}
              >
                {props.Nombre}
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text>SEXO: {props.Sexo ?? "______"}, CÉDULA/PASAPORTE:</Text>
              <Text
                style={{
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  flex: 1,
                  marginBottom: 25,
                  color: "blue",
                }}
              >
                {props.Cedula}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text>DIRECCIÓN:</Text>
              <Text
                style={{
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  flex: 1,
                  marginBottom: 25,
                  color: "blue",
                }}
              >
                {props.Direccion}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text>TELÉFONOS:</Text>
              <Text
                style={{
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  flex: 1,
                  marginBottom: 25,
                  color: "blue",
                }}
              >
                {props.Telefono}
              </Text>
              <Text>/</Text>

              <Text
                style={{
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  flex: 1,
                  marginBottom: 25,
                  color: "blue",
                }}
              >
                {props.Celular}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text>EMAIL: </Text>
              <Text
                style={{
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  flex: 1,
                  marginBottom: 25,
                  color: "blue",
                }}
              >
                {props.Correo}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text> LOCALIDAD/COMUNIDAD:</Text>
              <Text
                style={{
                  marginBottom: 25,
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  flex: 1,
                  color: "blue",
                }}
              >
                {props.Localidad}
              </Text>
              <Text>NACIONALIDAD</Text>
              <Text
                style={{
                  marginBottom: 25,
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  flex: 1,
                  color: "blue",
                }}
              >
                {props.Nacionalidad}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text> INGRESOS MENSUALES:</Text>
              <Text
                style={{
                  marginBottom: 25,
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  flex: 1,
                  color: "blue",
                }}
              >
                {props.IngresoMensual}
              </Text>
              <Text>OTROS INGRESOS</Text>
              <Text
                style={{
                  marginBottom: 25,
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  flex: 1,
                  color: "blue",
                }}
              >
                {props.OtrosIngresos}
              </Text>
            </View>
            <Text
              style={{
                marginBottom: 25,
                fontWeight: "bold",
                textAlign: "justify",
              }}
            >
              DATOS FAMILIARES
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text>NOMBRE DE CONYUGE</Text>
              <Text
                style={{
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  flex: 1,
                  marginBottom: 15,
                  color: "blue",
                }}
              >
                {props.ConyugeNombre}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text>TELÉFONOS:</Text>
              <Text
                style={{
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  flex: 1,
                  marginBottom: 25,
                  color: "blue",
                  fontSize: 11,
                }}
              >
                {props.ConyugeTelefono}
              </Text>
              <Text>/</Text>
              <Text
                style={{
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  flex: 1,
                  marginBottom: 25,
                  color: "blue",
                  fontSize: 11,
                }}
              >
                {props.ConyugeCelular}
              </Text>
            </View>
            <Text
              style={{
                marginBottom: 25,
                textAlign: "justify",
              }}
            >
              COMPROMISO DEL SOCIO: ME COMPROMETO A PAGAR LA SUMA DE
              <Text
                style={{
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  color: "blue",
                  fontSize: 11,
                }}
              >
                ______
              </Text>
              RD$
              <Text
                style={{
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,

                  color: "blue",
                  fontSize: 11,
                }}
              >
                ______
              </Text>
              (00) POR CONCEPTO DE CUOTA DE ADMISIÓN, LA CUAL NO ES REEMBOLSABLE
              Y ADEMAS COMPRAR
              <Text
                style={{
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,

                  color: "blue",
                  fontSize: 11,
                }}
              >
                ______
              </Text>
              (
              <Text
                style={{
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  textDecoration: "underline",
                  color: "blue",
                  fontSize: 11,
                }}
              >
                {" "}
              </Text>
              ) CERTIFICADOS DE APORTACIÓN POR VALOR DE{" "}
              <Text
                style={{
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,

                  color: "blue",
                  fontSize: 11,
                }}
              >
                ______
              </Text>
              RD${" "}
              <Text
                style={{
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  color: "blue",
                  fontSize: 11,
                }}
              >
                ______
              </Text>
              (00) CADA UNO, Y AHORRAR MENSUALMENTE LA SUMA DE{" "}
              <Text
                style={{
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  color: "blue",
                  fontSize: 11,
                }}
              >
                ____
              </Text>
              RD$
              <Text
                style={{
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,

                  color: "blue",
                  fontSize: 11,
                }}
              >
                ______
              </Text>
              (00).
            </Text>
            <Text
              style={{
                fontSize: 10,
                marginBottom: 25,
                textAlign: "justify",
              }}
            >
              NOTA: AUTORIZO QUE EN CASO DE MI FALLECIMIENTO O EN SITUACIÓN DE
              SALUD QUE ME INCAPACITE, SE ENTREGUE MIS AHORROS Y BENEFICIOS A:
            </Text>

            <View
              style={{
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                flexDirection: "row",
              }}
            >
              <View style={{ width: "32%" }}>
                <Text
                  style={{
                    marginBottom: 9,
                    textAlign: "center",
                  }}
                >
                  NOMBRE:
                </Text>
                <Text
                  style={{
                    marginBottom: 15,
                    borderBottom: 1,
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                    width: "100%",
                  }}
                ></Text>
                <Text
                  style={{
                    borderBottom: 1,
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                    width: "100%",
                    marginBottom: 15,
                  }}
                ></Text>
                <Text
                  style={{
                    textAlign: "center",
                    borderBottom: 1,
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                    width: "100%",
                  }}
                ></Text>
              </View>
              <View style={{ width: "32%" }}>
                <Text
                  style={{
                    marginBottom: 9,
                    textAlign: "center",
                  }}
                >
                  CÉDULA:
                </Text>
                <Text
                  style={{
                    marginBottom: 15,
                    borderBottom: 1,
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                    width: "100%",
                  }}
                ></Text>
                <Text
                  style={{
                    borderBottom: 1,
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                    width: "100%",
                    marginBottom: 15,
                  }}
                ></Text>
                <Text
                  style={{
                    textAlign: "center",
                    borderBottom: 1,
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                    width: "100%",
                  }}
                ></Text>
              </View>
              <View style={{ width: "32%" }}>
                <Text
                  style={{
                    marginBottom: 9,
                    textAlign: "center",
                  }}
                >
                  DIRECCIÓN:
                </Text>
                <Text
                  style={{
                    marginBottom: 15,
                    borderBottom: 1,
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                    width: "100%",
                  }}
                ></Text>
                <Text
                  style={{
                    borderBottom: 1,
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                    width: "100%",
                    marginBottom: 15,
                  }}
                ></Text>
                <Text
                  style={{
                    textAlign: "center",
                    borderBottom: 1,
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                    width: "100%",
                  }}
                ></Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  marginBottom: 25,
                }}
              >
                ____________________ {"\n"} FIRMA DEL SOCIO/A
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  marginBottom: 25,
                  textAlign: "center",
                }}
              >
                ____________________ {"\n"} COMITÉ GESTOR
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
