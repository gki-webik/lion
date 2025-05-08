"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./Header.scss";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const dropdownRef = useRef(null);
  const menuContainerRef = useRef(null);
  const menuItemsRef = useRef([]);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
    setActiveSubmenu(null);
  };

  const handleSubmenuToggle = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const checkMenuOverflow = () => {
    if (!menuContainerRef.current || menuItemsRef.current.length === 0) return;

    const containerWidth = menuContainerRef.current.offsetWidth;
    let totalWidth = 0;

    menuItemsRef.current.forEach((item) => {
      if (item) {
        totalWidth += item.offsetWidth;
      }
    });

    setIsOverflowing(totalWidth > containerWidth - 50);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    checkMenuOverflow();
    window.addEventListener("resize", checkMenuOverflow);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", checkMenuOverflow);
    };
  }, []);

  const menuItems = [
    {
      title: "Львиная научная Вселенная",
      submenu: [
        { title: "Краткая биография", link: "/biography" },
        {
          title: "Публикации",
          submenu: [
            { title: "Книги", link: "/publications/books" },
            { title: "Статьи", link: "/publications/articles" },
            { title: "Библиография", link: "/publications/bibliography" },
          ],
        },
        {
          title: "Выступления",
          submenu: [
            { title: "Видео", link: "/performances/videos" },
            { title: "Фотографии", link: "/performances/photos" },
            { title: "Список выступлений", link: "/performances/list" },
          ],
        },
        {
          title: "Фотографии",
          submenu: [
            { title: "Фото, сделанные Львом", link: "/photos/by-leone" },
            { title: "Фото Льва", link: "/photos/of-leone" },
          ],
        },
        { title: "Страницы Льва в интернете", link: "/internet-pages" },
      ],
    },
    {
      title: "Гуманитарный клуб «Intrada»",
      submenu: [
        {
          title: "Книги, созданные Львом",
          submenu: [
            { title: "Обложки наших книг", link: "/intrada/books/covers" },
            { title: "Пдф наших книг", link: "/intrada/books/pdf" },
          ],
        },
        {
          title: "Книги, вышедшие после 29.11.2021",
          submenu: [
            { title: "Обложки", link: "/intrada/new-books/covers" },
            { title: "Пдф", link: "/intrada/new-books/pdf" },
            { title: "Общий список", link: "/intrada/new-books/list" },
            { title: "Как приобрести", link: "/intrada/new-books/purchase" },
          ],
        },
      ],
    },
    {
      title: "Льву посвящается",
      submenu: [
        {
          title: "Конференции",
          submenu: [
            {
              title: "Программы конференций",
              link: "/dedicated/conferences/programs",
            },
            { title: "Видео докладов", link: "/dedicated/conferences/videos" },
          ],
        },
        { title: "Книги", link: "/dedicated/books" },
        { title: "Статьи о львиной поэтике", link: "/dedicated/articles" },
      ],
    },
    {
      title: "Новости",
      link: "/news",
    },
    {
      title: "Гостевая страница",
      link: "/guest",
    },
    {
      title: "Контакты",
      link: "/contacts",
    },
  ];

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="/images/logo.png" alt="AI Leone Logo" />
          <div className="logo-text">
            <Link href="/">
              <span className="logo-title">AI Leone</span>
            </Link>
          </div>
        </div>

        {/* Гамбургер-меню для мобильных устройств */}
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Меню"
          style={{ display: isOverflowing ? "block" : "none" }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          ref={dropdownRef}
          className={`${isMobileMenuOpen || !isOverflowing ? "open" : ""}`}
        >
          <div className="menu-container" ref={menuContainerRef}>
            <ul className="main-menu">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={activeDropdown === index ? "active" : ""}
                  ref={(el) => (menuItemsRef.current[index] = el)}
                >
                  {item.submenu ? (
                    <>
                      <button
                        className="dropdown-toggle"
                        onClick={() => handleDropdownToggle(index)}
                      >
                        {item.title}
                        <span className="arrow"></span>
                      </button>
                      {activeDropdown === index && (
                        <ul className="dropdown-menu">
                          {item.submenu.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className={
                                activeSubmenu === subIndex ? "active" : ""
                              }
                            >
                              {subItem.submenu ? (
                                <>
                                  <button
                                    className="submenu-toggle"
                                    onClick={() =>
                                      handleSubmenuToggle(subIndex)
                                    }
                                  >
                                    {subItem.title}
                                    <span className="arrow"></span>
                                  </button>
                                  {activeSubmenu === subIndex && (
                                    <ul className="submenu">
                                      {subItem.submenu.map(
                                        (subSubItem, subSubIndex) => (
                                          <li key={subSubIndex}>
                                            <Link href={subSubItem.link}>
                                              {subSubItem.title}
                                            </Link>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </>
                              ) : (
                                <Link href={subItem.link}>{subItem.title}</Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link href={item.link}>{item.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
