import React from "react";
import { NextPage } from "next";
import ErrorMessage from "@/modules/shared/ErrorMessage";

interface ErrorViewProps {
  statusCode?: number;
  message?: string;
}

const ErrorView: NextPage<ErrorViewProps> = ({ statusCode, message }) => {
  return <ErrorMessage statusCode={statusCode} message={message} />;
};

const notFoundStatusCode = 404;

ErrorView.getInitialProps = async ({ res, err }) => {
  // Cuando ocurre un error en un "getServerSideProps", etc., tanto "res" como "err" tienen un valor.
   // Si hay un error del lado del cliente, solo "err" tiene un valor.
   // Si abrimos una ruta que no existe, "res" tiene un valor pero "err" no, etc.
  const statusCode = err?.statusCode ?? res?.statusCode ?? notFoundStatusCode;
  const message =
    err?.message ??
    res?.statusMessage ??
    (statusCode === notFoundStatusCode ? "Not Found" : undefined);
  return { statusCode, message };
};

export default ErrorView;
