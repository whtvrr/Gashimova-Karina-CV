import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';

const PDFDownloadButton = ({ cvData, language, photo }) => {
  const getFileName = () => {
    const langSuffix = language === 'ru' ? 'RU' : language === 'en' ? 'EN' : 'KZ';
    return `GashinovaKarina_CV_${langSuffix}.pdf`;
  };

  const getButtonText = () => {
    if (language === 'ru') return 'Экспорт PDF';
    if (language === 'en') return 'Export PDF';
    return 'PDF жүктеп алу';
  };

  const getLoadingText = () => {
    if (language === 'ru') return 'Генерация PDF...';
    if (language === 'en') return 'Generating PDF...';
    return 'PDF жасалуда...';
  };

  return (
    <PDFDownloadLink
      document={<PDFDocument cvData={cvData} photo={photo} />}
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
