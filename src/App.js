import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import Preview from './Preview';
import Error from './components/Error';
import Footer from "./components/Footer";

export default function App() {
    const { id } = useParams();

    if (id == null) {
        return (
            <Error error="Coin Template ID was not provided." />
        );
    } else {
        return (
            <div>
                <Preview coinId={id} />
                <br/><br/>
                <Footer />
            </div>
        );
    }
}