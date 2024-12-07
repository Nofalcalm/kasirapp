import React from 'react';
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.incomeBox}>
          <Text style={styles.incomeText}>Pendapatan Hari Ini</Text>
          <Text style={styles.amount}>Rp808.000</Text>
          <Text style={styles.subText}>Produk Terjual Hari Ini: 6</Text>
        </View>
        <View style={styles.incomeBox}>
          <Text style={styles.incomeText}>Pendapatan Bulan Ini</Text>
          <Text style={styles.amount}>Rp5.671.000</Text>
          <Text style={styles.subText}>Produk Terjual Bulan Ini: 43</Text>
        </View>
      </View>


      <View style={styles.menu}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.menuLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>


      <View style={styles.infoCards}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Transaksi Hari Ini</Text>
          <Text style={styles.cardValue}>12 Transaksi</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Stok Produk Terendah</Text>
          <Text style={styles.cardValue}>5 Produk</Text>
          <Text style={styles.cardDetail}>Produk: Bola, Raket, Sepatu</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const menuItems = [
  { label: 'Jasa', icon: require('@/assets/images/react-logo.png') },
  { label: 'Pelanggan', icon: require('@/assets/images/react-logo.png') },
  { label: 'Kategori', icon: require('@/assets/images/react-logo.png') },
  { label: 'Produk', icon: require('@/assets/images/react-logo.png') },
  { label: 'Karyawan', icon: require('@/assets/images/react-logo.png') },
  { label: 'Supplier', icon: require('@/assets/images/react-logo.png') },
  { label: 'Pembelian', icon: require('@/assets/images/react-logo.png') },
  { label: 'Pengeluaran', icon: require('@/assets/images/react-logo.png') },
];

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  incomeBox: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  incomeText: {
    fontSize: 14,
    color: '#333',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 4,
  },
  subText: {
    fontSize: 12,
    color: '#666',
  },
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  menuItem: {
    width: '22%',
    alignItems: 'center',
    marginVertical: 8,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  menuLabel: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
  infoCards: {
    marginVertical: 16,
  },
  card: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 14,
    color: '#666',
  },
  cardDetail: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
});
