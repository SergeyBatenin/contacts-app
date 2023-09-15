package ru.sergeybatenin.contactapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.sergeybatenin.contactapp.entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
