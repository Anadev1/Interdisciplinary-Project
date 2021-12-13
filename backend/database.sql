USE alexkrugeri_com_db_shareat;

DROP PROCEDURE IF EXISTS CreateUser;
CREATE PROCEDURE `CreateUser`(
    IN firstnameVar VARCHAR(50),
    IN lastnameVAR VARCHAR(50),
    IN emailVar VARCHAR(30),
    IN passwordVar VARCHAR(60)
)
BEGIN
    START TRANSACTION;

        INSERT INTO users (FirstName, LastName)
        VALUES (firstnameVar, lastnameVar);
 
        SET @userID := (SELECT id FROM users ORDER BY id DESC LIMIT 1);

        INSERT INTO UserLogin (id, Email, PSWD)
        VALUES (@userID, usernameVar, passwordVar);
    COMMIT;
END;