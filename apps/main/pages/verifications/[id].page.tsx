import React, { useEffect } from "react";
import {
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
  IconButton,
  Box,
  Spinner,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import StateIcon from "../../components/StateIcon";
import { SectionHeading, SectionPanel } from "../../components/Section";
import { Header } from "../../components/Header";
import { CloseIcon } from "@chakra-ui/icons";
import { useGetSingleVerification } from "../../hooks/verifications";
import { useStore as useAuth } from "../../stores/authSession";
import { useRouter } from "next/router";
import ValidatorsList from "./ValidatorsList";
import PersonalData from "./PersonalData";
import StatusNotice from "../../components/StatusNotice";
import VerifiableCredential from "./VerifiableCredential";
import { Loading } from "../../components/Loading";

export default function VerificationContainer() {
  const router = useRouter();
  const { session } = useAuth();
  const id = router.query && router.query.id ? router.query.id : "";
  const { data, isLoading } = useGetSingleVerification(id.toString());

  useEffect(() => {
    if (!isLoading && data && data.personal_info) {
      console.log("Requester account info loaded", data);
    }
  }, [data]);
  if (!data || isLoading) return <Loading>Cargando verificacion</Loading>;
  return (
    <>
      <Header
        isLoading={!data}
        breadcrumb={`/ Fe de vida / Solicitud en Proceso`}
        title={data && `${data.personal_info.full_name}`}
        subtitle={data && `Solicitada por ${data.requester.full_name}`}
        bigImage={`certificate-outline.svg`}
      >
        <IconButton
          onClick={() => router.push("/dashboard")}
          borderRadius="full"
          aria-label="Cerrar"
          icon={<CloseIcon />}
        />
      </Header>

      <Container maxW="container.xl" id="dashboard" pt={8}>
        <StatusNotice state={data && data.state} />

        {data && data.token_id && (
          <>
            <SectionHeading title="CREDENCIAL" />
            <SectionPanel>
              <VerifiableCredential token_id={data && data.token_id} />
            </SectionPanel>
          </>
        )}

        <SectionHeading title="DATOS PERSONALES" />
        <SectionPanel>
          <PersonalData data={data} />
        </SectionPanel>

        <SectionHeading title="VALIDADORES" />
        <SectionPanel>
          <ValidatorsList items={data && data.contract.validations} />
        </SectionPanel>
        <hr />
        {/* {<Text fontSize="xs" pt="lg">
          Verification content:
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Text>} */}
      </Container>
    </>
  );
}
