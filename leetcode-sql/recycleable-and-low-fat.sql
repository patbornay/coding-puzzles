--  Write your MySQL query statement below
SELECT product_id FROM products p
WHERE p.low_fats = "Y" AND p.recyclable = "Y";
-- Optimised solution 
SELECT product_id FROM products
WHERE low_fats="Y" and recyclable="Y";