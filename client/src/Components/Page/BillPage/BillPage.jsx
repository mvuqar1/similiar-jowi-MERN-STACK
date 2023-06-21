import React, { useState } from 'react'
import Header from '../../Header/Header';
import { Button, Card, Modal, Table } from 'antd';

export default function BillPage() {
    const dataSource = [
        {
            key: '1',
            name: 'Vuqar',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // const onFinish = (values) => {
    //     console.log(isModalOpen)
    //     console.log(values)
    // };
    return (
        <>
            <Header />
            <div className='px-6'>
                <Table dataSource={dataSource} columns={columns} bordered pagination={false} />
                <div className=''>
                    <Card size="small" className='mt-4 ' >
                        <Button onClick={showModal} className='primary mt-4 w-full' type='primary' size='large'>Sifarish Yazdir</Button>
                    </Card>
                </div>
            </div>
            <Modal
                title="Yeni Faktura"
                open={isModalOpen}
                footer={false}
                onCancel={handleCancel}
                width={800}
            >
                {/* <section className='py-20 bg bg-black'>
                    <div className="max-w-5xl mx-auto bg-white px-6">
                        <article className='overflow-hidden'>
                            <div className="logo my-6">
                                <h2 className='text-4xl font-bold text-slate-700'>LOGO</h2>
                            </div>
                            <div className="bill-deails">
                                <div className="grid grid-cols-4 gap-12">
                                    <div className="text-md text-slate-500">
                                        <p className="font-bold text-slate-700">Fatura Detayi:</p>
                                        <p>Unwrapped</p>
                                        <p>Fake Street 123</p>
                                        <p>San Javier</p>
                                        <p>CA 1234</p>
                                    </div>
                                    <div className="text-md text-slate-500">
                                        <p className="font-bold text-slate-700">Fatura Detayi:</p>
                                        <p>Unwrapped</p>
                                        <p>Fake Street 123</p>
                                        <p>San Javier</p>
                                        <p>CA 1234</p>
                                    </div>
                                    <div className="text-md text-slate-500">
                                        <div>
                                            <p className="font-bold text-slate-700">Fatura Nomresi:</p>
                                            <p>Unwrapped</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-700 mt-2">Verilish Tarixi:</p>
                                            <p>20.06.2023</p>
                                        </div>
                                    </div>
                                    <div className="text-md text-slate-500">
                                        <div>
                                            <p className="font-bold text-slate-700">Fatura Nomresi:</p>
                                            <p>Unwrapped</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-700 mt-2">Verilish Tarixi:</p>
                                            <p>20.06.2023</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="bill-table-area mt-8">
                                <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                                    <thead>
                                        <tr>
                                            <th scope='col' className='py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hiden'>Gorsel</th>
                                            <th scope='col' className='py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hiden'>Bawlik</th>
                                            <th scope='col' className='py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hiden'>Fiyat</th>
                                            <th scope='col' className='py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hiden'>Fiyat</th>
                                            <th scope='col' className='py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hiden'>Fiyat</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='py-4  pr-3 '>
                                                asda
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </article>
                    </div>
                </section> */}
                {/* <section className="py-20 bg-black">
                    <div className="max-w-5xl mx-auto bg-white px-6">
                        <article className="overflow-hidden">
                            <div className="logo my-6">
                                <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
                            </div>
                            <div className="bill-details">
                                <div className="grid sm:grid-cols-4 grid-cols-3 gap-12">
                                    <div className="text-md text-slate-500">
                                        <p className="font-bold text-slate-700">Fatura Detayı:</p>
                                        <p>Unwrapped</p>
                                        <p> Fake Street 123</p>
                                        <p> San Javier </p>
                                        <p> CA 1234</p>
                                    </div>
                                    <div className="text-md text-slate-500">
                                        <p className="font-bold text-slate-700">Fatura:</p>
                                        The Boring Company
                                        <p> Tesla Street 007</p>
                                        <p> Frisco </p>
                                        <p> CA 0000</p>
                                    </div>
                                    <div className="text-md text-slate-500 sm:block hidden">
                                        <div>
                                            <p className="font-bold text-slate-700">Fatura numarası:</p>
                                            <p>00041</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-700 mt-2">
                                                Veriliş Tarihi:
                                            </p>
                                            <p>2022-11-21</p>
                                        </div>
                                    </div>
                                    <div className="text-md text-slate-500">
                                        <div>
                                            <p className="font-bold text-slate-700">Şartlar:</p>
                                            <p>10 gün</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-700 mt-2">Vade:</p>
                                            <p>2023-11-21</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bill-table-area mt-8">
                                <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                                    <thead>
                                        <tr className="border-b border-slate-200">
                                            <th
                                                scope="col"
                                                className="py-3.5 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                                            >
                                                Görsel
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0"
                                            >
                                                {" "}
                                                Başlık
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                                            >
                                                Fiyat
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                                            >
                                                Adet
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 text-end text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 "
                                            >
                                                Toplam
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-slate-200">
                                            <td className="py-4 sm:table-cell hidden
                                            ">
                                                <img
                                                    src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
                                                    alt=""
                                                    className="w-12 h-12 object-cover"
                                                />
                                            </td>
                                            <td className="py-4">
                                                <span className="font-medium ">Şalgam</span>
                                            </td>
                                            <td className="py-4 text-center sm:table-cell hidden">
                                                <span>5₺</span>
                                            </td>
                                            <td className="py-4 text-center sm:table-cell hidden">
                                                <span>1</span>
                                            </td>
                                            <td className="py-4 text-end ">
                                                <span>5.00₺</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th className="text-right pt-6" colSpan="4" scope="row">
                                                <span className="font-normal text-slate-700">
                                                    Ara Toplam
                                                </span>
                                            </th>
                                            <th className="text-right pt-4" scope="row">
                                                <span className="font-normal text-slate-700">61₺</span>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className="text-right pt-4" colSpan="4" scope="row">
                                                <span className="font-normal text-slate-700">KDV</span>
                                            </th>
                                            <th className="text-right pt-4" scope="row">
                                                <span className="font-normal text-red-600">+4.88₺</span>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className="text-right pt-4" colSpan="4" scope="row">
                                                <span className="font-normal text-slate-700">Total</span>
                                            </th>
                                            <th className="text-right pt-4" scope="row">
                                                <span className="font-normal text-slate-700">65.88₺</span>
                                            </th>
                                        </tr>
                                    </tfoot>
                                </table>
                                <div className="py-9">
                                    <div className="border-t pt-9 border-slate-200">
                                        <p className="text-sm font-light text-slate-700">
                                            Ödəmə şərtləri 14 gün müddətidir. Qabarılmamış Borcların Gec Ödənməsi Qanunu 0000-a əsasən, serbest işçilər bu müddətdən sonra borcların ödənməməsi halında 00.00 gecikmə haqqı tələb etmə hüququna malikdirlər və bu məsələdə bu haqa əlavə olaraq yeni bir faktura təqdim olunacağını xahiş edirik unutmayın. Düzəliş fakturanın 14 gün ərzində ödənməməsi halında, müddətini keçmiş hesaba əlavə faiz və %8 qanuni dərəcə artıq %0,5 Bank of England əsasına görə ümumi %8,5 tətbiq olunacaqdır. Tərəflər Qanun qaydaları dışında müqavilə bağlaya bilməzlər.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section> */}
                <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto bg-white px-6">
          <article className="overflow-hidden">
            <div className="logo my-6">
              <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
            </div>
            <div className="bill-details">
              <div className="grid sm:grid-cols-4 grid-cols-3 gap-12">
                <div className="text-md text-slate-500">
                  <p className="font-bold text-slate-700">Fatura Detayı:</p>
                  <p>Unwrapped</p>
                  <p> Fake Street 123</p>
                  <p> San Javier </p>
                  <p> CA 1234</p>
                </div>
                <div className="text-md text-slate-500">
                  <p className="font-bold text-slate-700">Fatura:</p>
                  The Boring Company
                  <p> Tesla Street 007</p>
                  <p> Frisco </p>
                  <p> CA 0000</p>
                </div>
                <div className="text-md text-slate-500">
                  <div>
                    <p className="font-bold text-slate-700">Fatura numarası:</p>
                    <p>00041</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 mt-2">
                      Veriliş Tarihi:
                    </p>
                    <p>2022-11-21</p>
                  </div>
                </div>
                <div className="text-md text-slate-500 sm:block hidden">
                  <div>
                    <p className="font-bold text-slate-700">Şartlar:</p>
                    <p>10 gün</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 mt-2">Vade:</p>
                    <p>2023-11-21</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bill-table-area mt-8">
              <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th
                      scope="col"
                      className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                    >
                      Görsel
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                    >
                      {" "}
                      Başlık
                    </th>
                    <th
                      colSpan={4}
                      scope="col"
                      className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:hidden"
                    >
                      {" "}
                      Başlık
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-center text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                    >
                      Fiyat
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-center text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                    >
                      Adet
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-end text-sm font-normal text-slate-700 md:pl-0"
                    >
                      Toplam
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 sm:table-cell hidden">
                      <img
                        src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
                        alt=""
                        className="w-12 h-12 object-cover"
                      />
                    </td>
                    <td className="py-4 sm:table-cell hidden">
                      <div className="flex flex-col">
                        <span className="font-medium">Şalgam</span>
                        <span className="sm:hidden inline-block text-xs">
                          Birim Fiyatı 5₺
                        </span>
                      </div>
                    </td>
                    <td className="py-4 sm:hidden" colSpan={4}>
                      <div className="flex flex-col">
                        <span className="font-medium">Şalgam</span>
                        <span className="sm:hidden inline-block text-xs">
                          Birim Fiyatı 5₺
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-center sm:table-cell hidden">
                      <span>5₺</span>
                    </td>
                    <td className="py-4 sm:text-center text-right sm:table-cell hidden">
                      <span>1</span>
                    </td>
                    <td className="py-4 text-end">
                      <span>5.00₺</span>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th
                      className="text-right pt-4 sm:table-cell hidden"
                      colSpan="4"
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">
                        Ara Toplam
                      </span>
                    </th>
                    <th
                      className="text-left pt-4 sm:hidden"
                      scope="row"
                      colSpan="4"
                    >
                      <p className="font-normal text-slate-700">Ara Toplam</p>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-slate-700">61₺</span>
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="text-right pt-4 sm:table-cell hidden"
                      colSpan="4"
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">KDV</span>
                    </th>
                    <th
                      className="text-left pt-4 sm:hidden"
                      scope="row"
                      colSpan="4"
                    >
                      <p className="font-normal text-slate-700">KDV</p>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-red-600">+4.88₺</span>
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="text-right pt-4 sm:table-cell hidden"
                      colSpan="4"
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">Genel Toplam</span>
                    </th>
                    <th
                      className="text-left pt-4 sm:hidden"
                      scope="row"
                      colSpan="4"
                    >
                      <p className="font-normal text-slate-700">Genel Toplam</p>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-slate-700">65.88₺</span>
                    </th>
                  </tr>
                </tfoot>
              </table>
              <div className="py-9">
                <div className="border-t pt-9 border-slate-200">
                  <p className="text-sm font-light text-slate-700">
                    Ödeme koşulları 14 gündür. Paketlenmemiş Borçların Geç
                    Ödenmesi Yasası 0000'e göre, serbest çalışanların bu süreden
                    sonra borçların ödenmemesi durumunda 00.00 gecikme ücreti
                    talep etme hakkına sahip olduklarını ve bu noktada bu ücrete
                    ek olarak yeni bir fatura sunulacağını lütfen unutmayın.
                    Revize faturanın 14 gün içinde ödenmemesi durumunda, vadesi
                    geçmiş hesaba ek faiz ve %8 yasal oran artı %0,5 Bank of
                    England tabanı olmak üzere toplam %8,5 uygulanacaktır.
                    Taraflar Kanun hükümleri dışında sözleşme yapamazlar.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

                <div className="flex justify-end mt-4">
                    <Button type="primary" size="large" className='primary'>Yazdır</Button>
                </div>

            </Modal>

        </>
    )
}
