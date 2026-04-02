import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';

const PDFDownloadButton = ({ cvData, language }) => {
  const getFileName = () => {
    const langSuffix = language === 'ru' ? 'RU' : 'KZ';
    return `GashinovaKarina_CV_${langSuffix}.pdf`;
  };

  const getButtonText = () => {
    return language === 'ru' ? 'Экспорт PDF' : 'PDF жүктеп алу';
  };

  const getLoadingText = () => {
    return language === 'ru' ? 'Генерация PDF...' : 'PDF жасалуда...';
  };

  return (
    <PDFDownloadLink
      document={<PDFDocument cvData={cvData} />}
      fileName={getFileName()}
      className="export-button"
    >
      {({ loading }) => (
        <button className="download-button">
          {loading ? getLoadingText() : getButtonText()}
        </button>
      )}
    </PDFDownloadLink>
  );
};

export default PDFDownloadButton;
