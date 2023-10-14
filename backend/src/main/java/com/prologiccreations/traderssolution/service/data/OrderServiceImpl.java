package com.prologiccreations.traderssolution.service.data;

import com.prologiccreations.traderssolution.dao.data.OrderRepository;
import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.model.data.Order;
import com.prologiccreations.traderssolution.service.super_classes.data.OrderService;
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
public class OrderServiceImpl implements OrderService {

    private final OrderRepository OrderRepository;

    @Override
    public Response storeData(Order data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
            OrderRepository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }

    @Override
    public Response<Page<Order>> getAll(Pageable pageable) {
        Page<Order> page = OrderRepository.findByActive(true, pageable);
        return new Response<>(SUCCESS, null, page);
    }

    @Override
    public Response<Order> getById(Long id) {
        Order Order = OrderRepository.findById(id).orElse(new Order());
        return new Response<>(SUCCESS, null, Order);
    }

    @Override
    public Response delete(Long id) {
        OrderRepository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(Order data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(Order data) {
//        boolean OrdernameExists;
//        if (data.hasId()) {
//            OrdernameExists = OrderRepository.existsByOrdername(data.getOrdername(), data.getId());
//        } else {
//            OrdernameExists = OrderRepository.existsByOrdername(data.getOrdername());
//        }
//        return OrdernameExists ? "Failed to register. Order already exists" : null;
        return null;
    }

}
