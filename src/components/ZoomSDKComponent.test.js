import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ZoomSDKComponent from "./ZoomSDKComponent";

const mockClient = {
  init: jest.fn().mockResolvedValue(),
  join: jest.fn().mockResolvedValue(),
  leaveMeeting: jest.fn().mockResolvedValue(),
};
jest.mock("@zoom/meetingsdk/embedded", () => ({
  createClient: () => mockClient,
}));

describe("ZoomSDKComponent", () => {
  const defaultProps = {
    authEndpoint: "",
    sdkKey: "sdkKey",
    meetingNumber: "123456789",
    passWord: "password",
    role: 1,
    userName: "Test User",
    userEmail: "test@example.com",
    registrantToken: "",
    zakToken: "",
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Renderiza botão "Entrar na Sessão" ao iniciar', () => {
    render(<ZoomSDKComponent {...defaultProps} />);
    const button = screen.getByText("Entrar na Sessão");

    expect(button).toBeInTheDocument();
  });
});
