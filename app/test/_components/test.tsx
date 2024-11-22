"use client";

import Image from 'next/image'
import { useEffect, useState } from "react"

const GeneratePreview = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScreenshot = async () => {
      const urlToScreenshot = "https://vk.com/podvodniy_jinchuriki"; 
      const apiUrl = `/api/getScreenshot?url=${encodeURIComponent(urlToScreenshot)}`;

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Ошибка загрузки скриншота");
        }

        const imageBlob = await response.blob();
        const imageObjectUrl = URL.createObjectURL(imageBlob);

        setImageSrc(imageObjectUrl);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchScreenshot();
  }, []);

  return (
    <div>
      <h1>Снимок страницы:</h1>
      {error ? (
        <p>Ошибка: {error}</p>
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt="Скриншот страницы"
          width={800}
          height={600}
          loading="lazy"
        />
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default GeneratePreview;
