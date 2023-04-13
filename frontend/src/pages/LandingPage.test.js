import { render, screen, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'
import LandingPage from "./LandingPage";
import {BrowserRouter as Router} from 'react-router-dom';
import { isCompositeComponent, isDOMComponent, isElement, isElementOfType } from "react-dom/test-utils";

afterEach(() => {
    cleanup();
})

test('should render LandingPage component', () => {
  render(
    <Router>
        <LandingPage />
    </Router>
  );
  const landingElement = screen.getByTestId('land');
  expect(landingElement).toBeInTheDocument();
})

test('should have the same text component', () => {
    render(
        <Router>
            <LandingPage />
        </Router>
      );
      const textElement = screen.getByTestId('text');
      expect(textElement).toHaveTextContent('Transform your Body, Mind and Soul with GIGAFIT')
})

test('should have the button text', () => {
    render(
        <Router>
            <LandingPage />
        </Router>
      );

      const buttonElement = screen.getByTestId('button-text')
      expect(buttonElement).toHaveTextContent('Get Started')
})

test('should match snapshot', () => {
  const tree = renderer.create(<Router>
    <LandingPage />
</Router>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('should not be integer', () => {
    render(
        <Router>
            <LandingPage />
        </Router>
      );

      const buttonElement = screen.getByTestId('button-text')
      expect(isNaN(buttonElement)).toBe(true)
})

test('should be non-user defined element', () => {
    render(
        <Router>
            <LandingPage />
        </Router>
      );

      const buttonElement = screen.getByTestId('button-text')
      expect(isCompositeComponent(buttonElement)).toBe(false)
})

test('should be a DOM element', () => {
    render(
        <Router>
            <LandingPage />
        </Router>
      );

      const buttonElement = screen.getByTestId('button-text')
      expect(isDOMComponent(buttonElement)).toBe(true)
})

test('should not be a React element', () => {
    render(
        <Router>
            <LandingPage />
        </Router>
      );

      const buttonElement = screen.getByTestId('button-text')
      expect(isElement(buttonElement)).toBe(false)
})

test('should not be a react component', () => {
    render(
      <Router>
          <LandingPage />
      </Router>
    );
    const landingElement = screen.getByTestId('land');
    expect(isElement(landingElement)).toBe(false);
  })

test('should not be of type componentClass', () => {
    render(
        <Router>
            <LandingPage />
        </Router>
      );
      const landingElement = screen.getByTestId('land');
    expect(isElementOfType(landingElement)).toBe(false);
})