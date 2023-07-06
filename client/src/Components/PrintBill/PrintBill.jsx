import React, { useRef } from 'react'
import { Button, Modal } from 'antd';
import {useReactToPrint} from "react-to-print"

export default function PrintBill({ setIsModalOpen, isModalOpen, customer }) {
    const ref=useRef()
    const handlePrint=useReactToPrint({
        content:()=>ref.current
    })


    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Modal
                title="Yeni Faktura"
                open={isModalOpen}
                footer={false}
                onCancel={handleCancel}
                width={800}
            >

                <section className="py-20 bg-black" ref={ref}>
                    <div className="max-w-5xl mx-auto bg-white px-6">
                        <article className="overflow-hidden">
                            <div className="logo my-6">
                                <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
                            </div>
                            <div className="bill-details">
                                <div className="grid sm:grid-cols-4 grid-cols-3 gap-12">
                                    <div className="text-md text-slate-500">
                                        <p className="font-bold text-slate-700">Faktura Detali:</p>
                                        <p>{customer?.customerName}</p>
                                        <p> Fake Street 123</p>
                                        <p> San Javier </p>
                                        <p> CA 1234</p>
                                    </div>
                                    <div className="text-md text-slate-500">
                                        <p className="font-bold text-slate-700">Faktura:</p>
                                        The Boring Company
                                        <p> Tesla Street 007</p>
                                        <p> Frisco </p>
                                        <p> CA 0000</p>
                                    </div>
                                    <div className="text-md text-slate-500">
                                        <div>
                                            <p className="font-bold text-slate-700">Faktura nomresi:</p>
                                            <p>00041</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-700 mt-2">
                                                Verilme Tarixi:
                                            </p>
                                            <p>{customer?.createdAt.substring(0, 10)}</p>
                                        </div>
                                    </div>
                                    <div className="text-md text-slate-500 sm:block hidden">
                                        <div>
                                            <p className="font-bold text-slate-700">Şertler:</p>
                                            <p>10 gün</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-700 mt-2">Catdirilma:</p>
                                            <p>{customer?.createdAt.substring(0, 10)}</p>
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

                                        {customer?.cartItems.map((item) => (

                                            <tr key={item._id} className="border-b border-slate-200">
                                                <td className="py-4 sm:table-cell hidden">
                                                    <img
                                                        src={item?.img}
                                                        alt={item?.title}
                                                        className="w-12 h-12 object-cover"
                                                    />
                                                </td>
                                                <td className="py-4 sm:table-cell hidden">
                                                    <div className="flex flex-col">
                                                        <span className="font-medium">{item?.title}</span>
                                                        <span className="sm:hidden inline-block text-xs">
                                                            Mehsul qiymeti {item?.price} Azn
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="py-4 sm:hidden" colSpan={4}>
                                                    <div className="flex flex-col">
                                                        <span className="font-medium">{item?.title}</span>
                                                        <span className="sm:hidden inline-block text-xs">
                                                            Mehsul qiymeti {item?.price} Azn
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="py-4 text-center sm:table-cell hidden">
                                                    <span>{item?.price} Azn</span>
                                                </td>
                                                <td className="py-4 sm:text-center text-right sm:table-cell hidden">
                                                    <span>{item?.quantity}</span>
                                                </td>
                                                <td className="py-4 text-end">
                                                    <span>{+item?.price * item?.quantity} Azn</span>
                                                </td>
                                            </tr>

                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th
                                                className="text-right pt-4 sm:table-cell hidden"
                                                colSpan="4"
                                                scope="row"
                                            >
                                                <span className="font-normal text-slate-700">
                                                    Mebleq
                                                </span>
                                            </th>
                                            <th
                                                className="text-left pt-4 sm:hidden"
                                                scope="row"
                                                colSpan="4"
                                            >
                                                <p className="font-normal text-slate-700">Mebleq</p>
                                            </th>
                                            <th className="text-right pt-4" scope="row">
                                                <span className="font-normal text-slate-700">{customer?.subTotal.toFixed(2)} Azn</span>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th
                                                className="text-right pt-4 sm:table-cell hidden"
                                                colSpan="4"
                                                scope="row"
                                            >
                                                <span className="font-normal text-slate-700">EDV</span>
                                            </th>
                                            <th
                                                className="text-left pt-4 sm:hidden"
                                                scope="row"
                                                colSpan="4"
                                            >
                                                <p className="font-normal text-slate-700">EDV</p>
                                            </th>
                                            <th className="text-right pt-4" scope="row">
                                                <span className="font-normal text-red-600">{customer?.tax.toFixed(2)} Azn</span>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th
                                                className="text-right pt-4 sm:table-cell hidden"
                                                colSpan="4"
                                                scope="row"
                                            >
                                                <span className="font-normal text-slate-700">Umumi mebleq</span>
                                            </th>
                                            <th
                                                className="text-left pt-4 sm:hidden"
                                                scope="row"
                                                colSpan="4"
                                            >
                                                <p className="font-normal text-slate-700">Umumi mebleq</p>
                                            </th>
                                            <th className="text-right pt-4" scope="row">
                                                <span className="font-normal text-slate-700">{customer?.totalAmount.toFixed(2)} Azn</span>
                                            </th>
                                        </tr>
                                    </tfoot>
                                </table>
                                <div className="py-9">
                                    <div className="border-t pt-9 border-slate-200">
                                        <p className="text-sm font-light text-slate-700">
                                        Ödəniş müddəti 14 gündür. Gec Qablaşdırılmamış Borclar.Ödəniş Aktı 0000-a əsasən, frilanserlər bu müddətdən azaddırlar.00:00-dan sonra borcların ödənilməməsi halında gecikmə haqqı tələb etmək hüququna sahib olduqlarını və bu nöqtədə. Nəzərə alın ki, əlavə olaraq yeni faktura təqdim olunacaq.Yenidən işlənmiş hesab-faktura 14 gün ərzində ödənilmədikdə, ödəmə tarixi əvvəlki hesab üzrə əlavə faiz və 8% qanunla müəyyən edilmiş faiz dərəcəsi üstəgəl 0,5% İngiltərə bazası da daxil olmaqla cəmi 8,5% tətbiq olunacaq. Tərəflər Qanunun müddəalarından başqa müqavilə bağlaya bilməzlər.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                <div className="flex justify-end mt-4">
                    <Button onClick={handlePrint} type="primary" size="large" className='primary'>Yazdır</Button>
                </div>

            </Modal>
        </>
    )
}
