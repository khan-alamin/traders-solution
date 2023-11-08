package com.prologiccreations.traderssolution.dao.config;

import com.prologiccreations.traderssolution.dto.config.ManagerDto;
import com.prologiccreations.traderssolution.model.config.Departments;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface DepartmentsRepository extends JpaRepository<Departments, Long> {

    Page<Departments> findByActive(boolean isActive, Pageable pageable);
    @Modifying
    @Query(value = "UPDATE Departments e " +
            "SET e.active = false, e.modifiedBy = :modifiedBy, e.modifiedDate = :modifiedDate " +
            "where e.id = :id")
    int softDeleteById(@Param("id") Long id, @Param("modifiedBy") String modifiedBy, @Param("modifiedDate") LocalDateTime modifiedDate);

    @Query("select " +
            "new com.prologiccreations.traderssolution.dto.config.ManagerDto(e.manager) " +
            "from Departments e " +
            "where e.manager is not null and e.active = true and e.manager.active = true")
    List<ManagerDto> findAllManagers();
}