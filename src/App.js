import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ContentGroup from './components/ContentGroup';
import PDFDownloadButton from './components/PDFDownloadButton';
import LanguageToggle from './components/LanguageToggle';
import { useLanguage } from './contexts/LanguageContext';
import allData from './data/cvData.json';
import rawPhoto from './photo.jpg';
import './App.css';

function App() {
  const { language } = useLanguage();
  const cvData = allData[language];
  const [normalizedPhoto, setNormalizedPhoto] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      canvas.getContext('2d').drawImage(img, 0, 0);
      setNormalizedPhoto(canvas.toDataURL('image/jpeg'));
    };
    img.src = rawPhoto;
  }, []);

  return (
    <div className="app-background">
      <div className="app-container">
        <div className="cv-paper">
          <LanguageToggle />

          <Header head={cvData.head} />

          <div className="content-container">
            {cvData.content.map((group, index) => (
              <ContentGroup key={index} group={group} />
            ))}
          </div>

          <div className="controls">
            <PDFDownloadButton cvData={cvData} language={language} photo={normalizedPhoto} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
