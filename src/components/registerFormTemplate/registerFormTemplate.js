import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import coopLogo from "./assets/cooplogo.png";

export const RegisterFormTemplate = () => {
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
      marginTop: "-80",
      width: 250,
      height: 250,
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
            Fecha <Text style={styles.underlined}>dd</Text> /{" "}
            <Text style={styles.underlined}>mm</Text> /{" "}
            <Text style={styles.underlined}>yyyy</Text>
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
                borderBottomColor: "black",
                borderBottomWidth: 1,
              }}
            >
              waos
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
                actual info ajaja waos
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text>SEXO M () F (), CÉDULA/PASAPORTE:</Text>
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
                asdasda
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
                asdasda
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
                something
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
                something
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
                something
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
                something
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
                something
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
                something
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
                something
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
                actual info ajaja waos
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
                something
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
                something
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
                  textDecoration: "underline",
                }}
              >
                {" "}
                waos{" "}
              </Text>
              RD$
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
                waos{" "}
              </Text>
              (00) POR CONCEPTO DE CUOTA DE ADMISIÓN, LA CUAL NO ES REEMBOLSABLE
              Y ADEMAS COMPRAR
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
                waos{" "}
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
                waos{" "}
              </Text>
              ) CERTIFICADOS DE APORTACIÓN POR VALOR DE{" "}
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
                waos{" "}
              </Text>
              RD${" "}
              <Text
                style={{
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  color: "blue",
                  fontSize: 11,
                  textDecoration: "underline",
                }}
              >
                {" "}
                waos{" "}
              </Text>
              (00) CADA UNO, Y AHORRAR MENSUALMENTE LA SUMA DE{" "}
              <Text
                style={{
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  color: "blue",
                  fontSize: 11,
                  textDecoration: "underline",
                }}
              >
                {" "}
                waos{" "}
              </Text>
              RD$
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
                waos{" "}
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
                flexDirection: "row",
                justifyContent: "space-around",
                textDecoration: "underline",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    marginBottom: 9,
                    textAlign: "center",
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                  }}
                >
                  NOMBRE
                </Text>
                <Text
                  style={{
                    marginBottom: 9,
                    textAlign: "center",
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                  }}
                >
                  s
                </Text>
                <Text
                  style={{
                    marginBottom: 9,
                    textAlign: "center",
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                  }}
                >
                  s
                </Text>
                <Text>s</Text>
              </View>

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{
                    marginBottom: 9,
                    textAlign: "center",
                  }}
                >
                  CEDULA
                </Text>
                <Text
                  style={{
                    marginBottom: 9,
                    textAlign: "center",
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                  }}
                >
                  s
                </Text>
                <Text
                  style={{
                    marginBottom: 9,
                    textAlign: "center",
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                  }}
                >
                  s
                </Text>
                <Text>s</Text>
              </View>

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text>DIRECCION</Text>
                <Text
                  style={{
                    marginBottom: 9,
                    textAlign: "center",
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                  }}
                >
                  s
                </Text>
                <Text
                  style={{
                    marginBottom: 9,
                    textAlign: "center",
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                  }}
                >
                  s
                </Text>
                <Text
                  style={{
                    marginBottom: 9,
                    textAlign: "center",
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                  }}
                >
                  s
                </Text>
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
