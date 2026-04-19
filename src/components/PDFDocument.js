import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';

Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
      fontWeight: 300,
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf',
      fontWeight: 400,
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf',
      fontWeight: 500,
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 22,
    paddingVertical: 12,
    fontFamily: 'Roboto',
    backgroundColor: '#E3FFF5'
  },
  header: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  photo: {
    width: 70,
    height: 70,
    borderRadius: 35,
    objectFit: 'cover',
    border: '2px solid #96D9C0',
  },
  headerInfo: {
    flex: 1,
    textAlign: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#06402B',
    marginBottom: 3
  },
  contact: {
    fontSize: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 3,
    marginBottom: 2
  },
  group: {
    marginBottom: 2
  },
  groupTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#06402B',
    marginBottom: 3,
    borderBottom: '1px solid #06402B',
    paddingBottom: 1
  },
  item: {
    marginBottom: 2
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2
  },
  header1: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  location: {
    fontSize: 12
  },
  subheaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3
  },
  header2: {
    fontSize: 11
  },
  duration: {
    fontSize: 11
  },
  list: {
    marginLeft: 8
  },
  listItem: {
    fontSize: 11,
    marginBottom: 4
  }
});

const PDFDocument = ({ cvData, photo }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Image src={photo} style={styles.photo} />
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{cvData.head.name}</Text>
          <View style={styles.contact}>
            {cvData.head.info.map((item, i) => (
              <React.Fragment key={i}>
                <Text>{item}</Text>
                {i < cvData.head.info.length - 1 && <Text>  •  </Text>}
              </React.Fragment>
            ))}
          </View>
          <View style={styles.contact}>
            <Text>{cvData.head.location}</Text>
          </View>
        </View>
      </View>

      {/* Content Sections */}
      {cvData.content.map((group, groupIndex) => (
        <View key={groupIndex} style={styles.group}>
          <Text style={styles.groupTitle}>{group.title}</Text>

          {group.items.map((item, itemIndex) => (
            <View key={itemIndex} style={styles.item}>
              {(item.header1 || item.location) && (
                <View style={styles.headerRow}>
                  {item.header1 ? <Text style={styles.header1}>{item.header1}</Text> : <Text />}
                  {item.location ? <Text style={styles.location}>{item.location}</Text> : <Text />}
                </View>
              )}

              {(item.header2 || item.duration) && (
                <View style={styles.subheaderRow}>
                  {item.header2 ? <Text style={styles.header2}>{item.header2}</Text> : <Text />}
                  {item.duration ? <Text style={styles.duration}>{item.duration}</Text> : <Text />}
                </View>
              )}

              {item.text.length > 0 && (
                <View style={styles.list}>
                  {item.text
                    .filter(line => line.trim() !== '')
                    .map((line, lineIndex) => (
                      <Text key={lineIndex} style={styles.listItem}>• {line}</Text>
                    ))}
                </View>
              )}
            </View>
          ))}
        </View>
      ))}
    </Page>
  </Document>
);

export default PDFDocument;
