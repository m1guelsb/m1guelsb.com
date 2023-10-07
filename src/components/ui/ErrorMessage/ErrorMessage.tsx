import React from "react";

interface ErrorMessageProps {
  message?: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <span className="text-sm text-danger ">{message}</span>;
};
