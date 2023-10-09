import React from 'react';
import { shallow } from 'enzyme';
import { expect as expectChai } from 'chai';
import App from '../App/App';
import Footer from './Footer';
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "../App/AppContext";

describe('Test Footer.js', () => {
    const value = { user: user, logOut: logOut };

    beforeAll(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });

    afterAll(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it('Footer without crashing', (done) =>
