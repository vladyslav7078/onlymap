// import { FC, useEffect } from "react";

// export const Kisska_ip: FC = () => {
//   const telegramBotToken = "6535001688:AAFlSKl--fjXQrKhoARTZC3erTEo-lkRd8M";
//   const chatId = "496042127"; // Узнайте ваш chatId, отправив сообщение боту @userinfobot
//   const apiUrl = "https://ipapi.co/json/";

//   useEffect(() => {
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         sendTelegramMessage(data);
//       })
//       .catch((error) => console.error("Произошла ошибка:", error));
//   }, []); // [] чтобы useEffect сработал только один раз при монтировании компонента

//   const sendTelegramMessage = (message: string) => {
//     const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

//     fetch(telegramApiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         chat_id: chatId,
//         text: message,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log("Сообщение отправлено:", data))
//       .catch((error) => console.error("Ошибка отправки сообщения:", error));
//   };

//   return <></>;
// };
