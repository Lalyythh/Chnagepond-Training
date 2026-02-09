import { render, screen } from '@testing-library/react';
import App from './App';
import Sum from './component/Sum';
import TestFuncComp from './component/TestFuncComp';
import ImageTest from './component/ImageTest';

// test('renders learn react link', () => {
//  render(<App />);
//  const linkElement = screen.getByText(/learn react/i);
//  expect(linkElement).toBeInTheDocument();
//});

test("Check addition of two numbers",()=>{
  render(<Sum/>);
  expect(Sum(10,20)).toBe(30);
});

test("Checking greeting",()=>{
  render(<TestFuncComp/>);
  const myTitle = screen.getByText("Greet");
  expect(myTitle).toBeInTheDocument();
});

test("Checking Image Component",()=>{
  render(<ImageTest/>);
  const myTitle = screen.getByTitle("AI Generated Image");
  expect(myTitle).toBeInTheDocument();
});

test('textbox testing', () => {
  render(<ImageTest/>);
  let textbox = screen.getByRole("textbox");
  expect(textbox).toBeInTheDocument();
  //let checkplaceholder=screen.getByPlaceholderText("enter user name");
  //expect(checkplaceholder).toBeInTheDocument();
});