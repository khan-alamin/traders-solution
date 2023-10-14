package com.prologiccreations.traderssolution.service.config;

import com.prologiccreations.traderssolution.dao.config.ProductRepository;
import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.model.config.Product;
import com.prologiccreations.traderssolution.service.super_classes.config.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import static com.prologiccreations.traderssolution.TradersSolutionApplication.getCurrentUsername;
import static com.prologiccreations.traderssolution.constants.enums.OperationStatus.FAILURE;
import static com.prologiccreations.traderssolution.constants.enums.OperationStatus.SUCCESS;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository ProductRepository;

    @Override
    public Response storeData(Product data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
            ProductRepository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }

    @Override
    public Response<Page<Product>> getAll(Pageable pageable) {
        Page<Product> page = ProductRepository.findByActive(true, pageable);
        return new Response<>(SUCCESS, null, page);
    }

    @Override
    public Response<Product> getById(Long id) {
        Product Product = ProductRepository.findById(id).orElse(new Product());
        return new Response<>(SUCCESS, null, Product);
    }

    @Override
    public Response delete(Long id) {
        ProductRepository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(Product data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(Product data) {
//        boolean ProductnameExists;
//        if (data.hasId()) {
//            ProductnameExists = ProductRepository.existsByProductname(data.getProductname(), data.getId());
//        } else {
//            ProductnameExists = ProductRepository.existsByProductname(data.getProductname());
//        }
//        return ProductnameExists ? "Failed to register. Product already exists" : null;
        return null;
    }

}
