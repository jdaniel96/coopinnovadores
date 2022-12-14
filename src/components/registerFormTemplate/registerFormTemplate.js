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

export const RegisterFormTemplate = ({ name, cedula, id }) => {
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

          <Text
            style={{
              alignSelf: "flex-start",
              fontSize: 11,
              marginLeft: 25,
            }}
          >
            Socio No. <Text style={styles.underlined}>{`___${id}____`}</Text>
          </Text>
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
            {/* from here example */}
            <View style={{ flexDirection: "row" }}>
              <Text>NOMBRE Y APPELLIDO:</Text>
              <Text
                style={{
                  textAlign: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  flex: 1,
                }}
              >
                actual info ajaja waos
              </Text>
            </View>
            {/* to here */}
            <Text style={{ marginBottom: 25, textAlign: "justify" }}>
              SEXO M () F (), CÉDULA/PASAPORTE:
              __________________________________________
            </Text>
            <Text style={{ marginBottom: 25, textAlign: "justify" }}>
              DIRECCIÓN:
              <Text style={styles.underlined}>
                ________________________________________________________________
              </Text>
            </Text>
            <Text style={{ marginBottom: 25, textAlign: "justify" }}>
              TELÉFONOS:{" "}
              <Text style={styles.underlined}>
                ______________________________
              </Text>{" "}
              /
              <Text style={styles.underlined}>
                ________________________________
              </Text>
            </Text>
            <Text style={{ marginBottom: 25, textAlign: "justify" }}>
              EMAIL:{" "}
              <Text style={styles.underlined}>
                ____________________________________________________________________
              </Text>
            </Text>
            <Text style={{ marginBottom: 25, textAlign: "justify" }}>
              LOCALIDAD/COMUNIDAD:
              <Text style={styles.underlined}>___________________</Text>{" "}
              <Text>
                NACIONALIDAD
                <Text style={styles.underlined}>____________________</Text>
              </Text>
            </Text>
            <Text style={{ marginBottom: 25, textAlign: "justify" }}>
              INGRESOS MENSUALES RD$:
              <Text style={styles.underlined}>__________________</Text>{" "}
              <Text>
                OTROS INGRESOS
                <Text style={styles.underlined}>_______________</Text>
              </Text>
            </Text>
            <Text
              style={{
                marginBottom: 25,
                fontWeight: "bold",
                textAlign: "justify",
              }}
            >
              DATOS FAMILIARES
            </Text>
            <Text style={{ marginBottom: 25, textAlign: "justify" }}>
              NOMBRE DE CONYUGE:{" "}
              <Text style={styles.underlined}>
                _____________________________________________________
              </Text>
            </Text>
            <Text style={{ marginBottom: 25, textAlign: "justify" }}>
              TELÉFONOS:{" "}
              <Text style={styles.underlined}>
                ______________________________
              </Text>{" "}
              /
              <Text style={styles.underlined}>
                ________________________________
              </Text>
            </Text>
            <Text
              style={{
                marginBottom: 25,
                textAlign: "justify",
                textAlign: "justify",
              }}
            >
              COMPROMISO DEL SOCIO: ME COMPROMETO A PAGAR LA SUMA DE
              <Text style={styles.underlined}>_____________________</Text>RD$
              <Text>_______</Text>.00 POR CONCEPTO DE CUOTA DE ADMISIÓN, LA CUAL
              NO ES REEMBOLSABLE Y ADEMAS COMPRAR __________(___) CERTIFICADOS
              DE APORTACIÓN POR VALOR DE _________(RD$ ______.00) CADA UNO, Y
              AHORRAR MENSUALMENTE LA SUMA DE ___________( RD$ ______.00).
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
                <Text style={{ marginBottom: 9 }}>NOMBRE</Text>
                <Text style={{ marginBottom: 9 }}>s</Text>
                <Text style={{ marginBottom: 9 }}>s</Text>
                <Text>s</Text>
              </View>

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ marginBottom: 9 }}>CEDULA</Text>
                <Text style={{ marginBottom: 9 }}>s</Text>
                <Text style={{ marginBottom: 9 }}>s</Text>
                <Text>s</Text>
              </View>

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text>DIRECCION</Text>
                <Text style={{ marginBottom: 9 }}>s</Text>
                <Text style={{ marginBottom: 9 }}>s</Text>
                <Text style={{ marginBottom: 9 }}>s</Text>
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
